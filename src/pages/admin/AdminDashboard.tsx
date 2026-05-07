function AdminDashboard() {
  return (
    <div className="container py-5">
      <h2>Admin Dashboard</h2>

      <div className="d-flex gap-3 mt-4">
        <a href="/admin/menu" className="btn btn-primary">
          Manage Menu
        </a>

        <a href="/admin/categories" className="btn btn-secondary">
          Manage Categories
        </a>
      </div>
    </div>
  );
}

export default AdminDashboard;
