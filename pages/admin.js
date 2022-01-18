import AdminLayout from "components/Layouts/AdminLayout";

const Admin = () => {
  return (
    <div>
      <h2>AdminLayout</h2>
    </div>
  );
};

export default Admin;

Admin.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
