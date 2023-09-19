export default function Breadcrumb({ pageTitle, pageDescription }) {
    return (
        <div className="bg-black p-4 text-white">
            <div className="container mx-auto">
                <p className="text-lg">{pageTitle}</p>
                <p className="text-sm">{pageDescription}</p>
            </div>
        </div>
    );
};
