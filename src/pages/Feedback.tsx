import FeedbackModel from "@/components/Feedback/FeedbackModel";
import Title from "@/components/share/Title";
import {
  useDeleteFeedbackMutation,
  useFeedbacksQuery,
} from "@/redux/slices/admin/feedbackApi";
import { Input, Table } from "antd";
import { Reply, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { format } from "timeago.js";

const Feedback = () => {
  //! Query
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  // set query for filter and search
  query["limit"] = size;
  query["page"] = page;
  const [open, setOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const { data: feedBackData } = useFeedbacksQuery<Record<string, any>>({
    ...query,
  });
  const data = feedBackData?.data;
  const [deleteFeedback, { isSuccess, error }] = useDeleteFeedbackMutation();
  useEffect(() => {
    if (isSuccess) {
      if (data) {
        alert("Feedback Delete Successfully");
        setOpen(false);
      }
    }

    if (error) {
      if ("data" in error) {
        const errorData = error as any;

        alert(errorData.data.message);
      } else {
        console.error("Login error:", error);
      }
    }
  }, [data, error, isSuccess, setOpen]);
  const showModal = (data: any) => {
    setSelectedFeedback(data);
    setOpen(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Feedback",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Time",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => format(createdAt),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, data: any) => (
        <div className="flex items-center gap-2 justify-end">
          <button
            className="flex items-center border rounded-md px-1"
            onClick={() => showModal(data)}
          >
            <Reply /> {data?.status}
          </button>
        </div>
      ),
    },
    {
      title: <div className="text-right">Action</div>,
      dataIndex: "action",
      key: "action",
      render: (_: any, data: any) => (
        <div className="flex items-center gap-2 justify-end">
          <button className="text-red-500">
            <Trash2 onClick={() => handleDelete(data?._id)} />
          </button>
        </div>
      ),
    },
  ];
  const handleDelete = async (id: string) => {
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmation.isConfirmed) {
      try {
        await deleteFeedback({ _id: id });
        Swal.fire("Deleted!", "The feedback has been deleted.", "success");
      } catch (error: any) {
        console.error(error.message);
        Swal.fire(
          "Error!",
          "There was an error deleting the feedback.",
          "error"
        );
      }
    }
  };
  const handlePageChange = (page: number, pageSize?: number) => {
    setPage(page);
    if (pageSize) {
      setSize(pageSize);
    }
  };

  return (
    <div>
      <Title>Feedback</Title>
      <Input
        prefix={<Search />}
        className="w-1/4 h-11 my-5"
        placeholder="Search"
      />
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          pageSize: size,
          total: feedBackData?.data?.pagination?.total,
          current: page,
          onChange: handlePageChange,
          showSizeChanger: true,
        }}
      />
      <FeedbackModel
        open={open}
        setOpen={setOpen}
        feedback={selectedFeedback}
      />
    </div>
  );
};

export default Feedback;
