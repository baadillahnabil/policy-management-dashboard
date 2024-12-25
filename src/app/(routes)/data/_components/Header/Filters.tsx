"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next-nprogress-bar";
import { Form, Select, DatePicker, type FormProps } from "antd";
import dayjs from "dayjs";

import {
  GetLocationsType,
  GetTopicsType,
  GetStatusesType,
} from "@/app/(routes)/data/_actions/actions";
import { PATH, createQueryString } from "@/app/_utils/routes";

const { RangePicker } = DatePicker;

interface FiltersProps {
  locations: GetLocationsType;
  topics: GetTopicsType;
  statuses: GetStatusesType;
}

const Filters = ({ locations, topics, statuses }: FiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [form] = Form.useForm();

  const handleFieldsChange: FormProps["onValuesChange"] = async () => {
    form.submit();
  };
  const handleSubmit: FormProps["onFinish"] = async () => {
    const formData = form.getFieldsValue();
    formData.dateFrom = formData.date?.[0]?.format("YYYY-MM-DD");
    formData.dateTo = formData.date?.[1]?.format("YYYY-MM-DD");
    delete formData.date;

    const queryString = Object.keys(formData)
      .filter((key) => formData[key] !== undefined && formData[key] !== null)
      .map((key) => createQueryString(key, formData[key]))
      .join("&");

    router.replace(`${PATH.DATA}${queryString && "?" + queryString}`);
  };

  return (
    <Form
      form={form}
      initialValues={{
        location:
          Number(searchParams.get("location")) <= 0
            ? undefined
            : Number(searchParams.get("location")),
        topic:
          Number(searchParams.get("topic")) <= 0
            ? undefined
            : Number(searchParams.get("topic")),
        status:
          Number(searchParams.get("status")) <= 0
            ? undefined
            : Number(searchParams.get("status")),
        date: [
          searchParams.get("dateFrom")
            ? dayjs(searchParams.get("dateFrom"))
            : undefined,
          searchParams.get("dateTo")
            ? dayjs(searchParams.get("dateTo"))
            : undefined,
        ],
      }}
      layout="vertical"
      onFinish={handleSubmit}
      onValuesChange={handleFieldsChange}
      autoComplete="off"
      className="flex items-center gap-4 flex-wrap"
    >
      <Form.Item name="location" label="Filter By Location:" className="mb-0">
        <Select
          options={locations.map(({ id, name }) => ({
            value: id,
            label: name,
          }))}
          placeholder="Select a location"
          allowClear
          className="w-48"
          size="small"
        />
      </Form.Item>
      <Form.Item name="topic" label="Filter By Topic:" className="mb-0">
        <Select
          options={topics.map(({ id, name }) => ({
            value: id,
            label: name,
          }))}
          placeholder="Select a topic"
          allowClear
          className="w-48"
          size="small"
        />
      </Form.Item>
      <Form.Item name="status" label="Filter By Status:" className="mb-0">
        <Select
          options={statuses.map(({ id, name }) => ({
            value: id,
            label: name,
          }))}
          placeholder="Select a status"
          allowClear
          className="w-48"
          size="small"
        />
      </Form.Item>
      <Form.Item name="date" label="Filter By Date:" className="mb-0">
        <RangePicker
          size="small"
          format={{ format: "DD-MM-YYYY" }}
          maxDate={dayjs(new Date())}
        />
      </Form.Item>
    </Form>
  );
};

export default Filters;
