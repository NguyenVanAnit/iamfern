export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen flex-col absolute top-0 left-0 w-full z-50 bg-white bg-opacity-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-[#e46565]"/>
            <p className="mt-6 text-xl font-medium text-red-400 italic">Đợi xíu nha...</p>
        </div>
    );
}