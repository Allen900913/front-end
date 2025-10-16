"use client";

import { useEffect, useState } from "react";
import { Button, Modal } from "antd";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  userId: string;
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  // modal 狀態
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [editText, setEditText] = useState("");

  // 抓資料
  async function fetchTasks() {
    const res = await fetch("/api/tasks");
    if (!res.ok) {
      console.error("Failed to fetch tasks");
      return;
    }
    const data = await res.json();
    setTasks(Array.isArray(data) ? data : []);
  }

  // 新增
  async function addTask(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    });
    const newTask = await res.json();
    setTitle("");
    setTasks((tasks) => [...tasks, newTask]);
  }

  // 刪除
  async function deleteTask(id: number) {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  }

  // 打開 modal
  const showModal = (task: Task) => {
    setEditingTask(task);
    setEditText(task.title);
  };

  // 確認修改
  const handleOk = async () => {
    if (!editingTask) return;
    setConfirmLoading(true);
    const res = await fetch(`/api/tasks/${editingTask.id}`, {
      method: "PUT",
      body: JSON.stringify({ title: editText }),
      headers: { "Content-Type": "application/json" },
    });
    const updatedTask = await res.json();
    setTasks((tasks) =>
      tasks.map((t) => (t.id === editingTask.id ? updatedTask : t))
    );
    setConfirmLoading(false);
    setEditingTask(null);
  };

  // 取消
  const handleCancel = () => {
    setEditingTask(null);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      {/* 標題 */}
      <h1 className="text-3xl font-bold text-gray-800">📝 My Tasks</h1>

      {/* 新增任務表單 */}
      <form onSubmit={addTask} className="flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          disabled={!title.trim()}
        >
          Add
        </button>
      </form>

      {/* 任務清單 */}
      <ul className="space-y-3">
        {tasks.length === 0 && (
          <li key="empty" className="text-gray-500">
            No tasks yet. Add one above 👆
          </li>
        )}
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex items-center justify-between bg-white shadow rounded-lg px-4 py-3"
          >
            <span className="text-gray-700">{t.title}</span>
            <span className="flex items-center gap-3">
              <Button type="primary" onClick={() => showModal(t)}>
                Edit
              </Button>
              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>

      {/* 只放一個 Modal */}
      <Modal
        title="Edit Task"
        open={!!editingTask}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </Modal>
    </div>
  );
}
