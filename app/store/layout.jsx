import StoreLayout from "../../../components/store/StoreLayout";

export const metadata = {
    title: "EM's Vital Végétal. - Store Dashboard",
    description: "EM's Vital Végétal. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
