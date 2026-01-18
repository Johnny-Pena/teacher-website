export default function GoTo() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-emerald-600 mb-4">Go To Page</h2>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                        <div className="overflow-hidden rounded-lg border-2 border-emerald-200 shadow-lg">
                            <iframe 
                                src="/assets/JuanPenaGoToPage.pdf"
                                className="w-full h-96 md:h-[600px] lg:h-[700px]"
                                title="Go To Page by Juan Peña"
                                style={{ border: 'none' }}
                            />
                        </div>
                        <div className="text-center mt-4">
                            <a 
                                href="/assets/JuanPenaGoToPage.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                📄 Open in New Tab
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
