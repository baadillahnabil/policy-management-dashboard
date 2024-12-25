import { useMemo } from "react";
import { Tooltip, Tag } from "antd";
import {
  FaMapMarkerAlt,
  FaLightbulb,
  FaInfoCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import dayjs from "dayjs";

import { type GetDataType } from "@/app/(routes)/data/_actions/actions";

interface CardBody {
  item: GetDataType[number];
}

const CardBody = ({ item }: CardBody) => {
  const tags = useMemo(
    () => [
      {
        key: item.locationId,
        label: "Location",
        value: item.location.name,
        icon: <FaMapMarkerAlt />,
        color: "blue",
      },
      {
        key: item.topicId,
        label: "Topic",
        value: item.topic.name,
        icon: <FaLightbulb />,
        color: "green",
      },
      {
        key: item.statusId,
        label: "Status",
        value: item.status.name,
        icon: <FaInfoCircle />,
        color: "orange",
      },
      {
        key: item.dateIntroduced.getUTCSeconds(),
        label: "Date Introduced",
        value: dayjs(item.dateIntroduced).format("DD-MM-YYYY"),
        icon: <FaCalendarAlt />,
        color: "red",
      },
    ],
    [item]
  );

  return (
    <section className="flex flex-col gap-2 justify-between">
      <p className="p-0 pb-3 min-h-28">{item.shortDescription}</p>
      <section className="flex gap-x-1 gap-y-2 flex-wrap">
        {tags.map(({ key, label, color, icon, value }, index) => (
          <Tooltip
            key={`${key}-${index}`}
            title={label}
            color={color}
            overlayInnerStyle={{ fontSize: "10px" }}
          >
            <Tag
              color={color}
              icon={icon}
              className="flex items-center gap-2 text-xs py-1 px-2 w-min"
            >
              {value}
            </Tag>
          </Tooltip>
        ))}
      </section>
    </section>
  );
};

export default CardBody;
