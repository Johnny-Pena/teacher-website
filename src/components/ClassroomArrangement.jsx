export default function ClassroomArrangement() { 
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-emerald-600 mb-4">Sample Classroom Arrangement</h2>
                    <h3 className="text-lg mb-2">This seating chart is an example of how the classroom will be arranged using my seating chart app Seating Chart Ninja</h3>
                    <div className="flex justify-center">
                        <img 
                            src="/assets/SeatingChartScreenshot.png" 
                            alt="Sample Classroom Seating Chart" 
                            className="max-w-full h-auto rounded-lg shadow-lg border-2 border-emerald-200"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}