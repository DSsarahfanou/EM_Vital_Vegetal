import AdminLayout from "../../components/admin/AdminLayout";

export const metadata = {
    title: "EM's Vital Végétal. - Admin",
    description: "EM's Vital Végétal. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
