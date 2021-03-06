import React, { useState, useEffect } from "react";
import { Table } from "@";

const tableData = [
  {
    ip: "87.101.12.1",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "3234234232342342次32342342次32342342次次"
  },
  {
    ip: "87.101.12.2",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次"
  },
  {
    ip: "87.101.12.3",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次"
  },
  {
    ip: "87.101.12.4",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次"
  },
  {
    ip: "87.101.12.5",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次"
  },
  {
    ip: "87.101.12.6",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次"
  },
  {
    ip: "87.101.12.7",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次",
    children: [
      {
        ip: "子12",
        labels: [
          {
            type: "error",
            desc: "IDC机房"
          },
          {
            type: "info",
            desc: "辣鸡邮件"
          }
        ],
        type: "阻断",
        times: "32342342次"
      },
      {
        ip: "子13",
        labels: [
          {
            type: "error",
            desc: "IDC机房"
          },
          {
            type: "info",
            desc: "辣鸡邮件"
          }
        ],
        type: "阻断",
        times: "32342342次"
      }
    ]
  }
];

export default function Wrap() {
  const [sort, setSort] = useState({
    sortKey: "times",
    sortFlag: "asc"
  });
  const [list, setList] = useState(tableData);
  // const hanldeSortChange = arr => {
  //   setList(arr);
  // };
  const [draggable, setDraggable] = useState(false);
  useEffect(() => {
    console.log(1111);
    fetch("www.baidu.com");
  });
  const handleDragChange = (arr = []) => {
    const elems = document.querySelectorAll(".table-body-row");
    let index = 0;
    const length = elems.length;
    for (; index < length; index++) {
      elems[index].style.opacity = 1;
    }
    setDraggable(false);
  };
  const columns = [
    {
      key: "labels",
      title: "1ddd",
      width: 200,
      render(items) {
        return (
          <div
            // key={item.desc}
            className="mgr10"
            onMouseDown={() => setDraggable(true)}
          >
            {1223}
          </div>
        );
      }
    },
    {
      key: "ip",
      title: "2",
      width: 180,
      sortable: true,
      render(item) {
        return <span className="color-error">{item}</span>;
      }
    },
    {
      title: "操作",
      width: 200,
      render(item, row) {
        return <span>现在还没有操作</span>;
      }
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        select
        striped
        handleSelectChanged={console.log}
        data={tableData}
      />
    </div>
  );
}
