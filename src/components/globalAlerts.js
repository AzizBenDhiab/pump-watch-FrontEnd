import PumpsTable from "./pumpTable";
import SummaryCard from "./summaryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug, faGaugeHigh } from "@fortawesome/free-solid-svg-icons"; // Import the required icons
import BotPump from "./BotPump";
const GlobalAlerts = ({ pumpData, errorReports, handlePumpClick }) => {
  return (
    <div className="bg-white p-6">
      {/* Header */}
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-900">
          Check Out Your Latest Alerts
        </h1>
        <div>
          <select
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md appearance-none cursor-pointer"
            defaultValue="2024-11-16"
            onChange={(e) => console.log(`Selected date: ${e.target.value}`)}
          >
            <option value="2024-11-15">Friday 15 November 2024</option>
            <option value="2024-11-16">Saturday 16 November 2024</option>
            <option value="2024-11-17">Sunday 17 November 2024</option>
          </select>
        </div>
      </header>

      {/* Subtitle */}
      <p className="mb-6 text-gray-600">
        Select an element to view more details or to generate a summary report
      </p>

      {/* Latest Pump Errors Table */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-blue-800">
            Latest Pumps Errors
          </h2>
          <span className="text-sm text-gray-500">
            Latest Update 30 Sec Ago
          </span>
        </div>
        <PumpsTable data={pumpData} onPumpClick={handlePumpClick} />
      </section>

      {/* Actions Required & Previous Reports */}
      <div className="flex flex-wrap gap-6">
        {/* Actions Required */}
        <div className="flex flex-col gap-4  w-1/3">
          <h2 className="text-lg font-semibold text-blue-800">
            Actions Required!
          </h2>
          <SummaryCard
            icon={<FontAwesomeIcon icon={faPlug} />}
            title="Current Pumps ON"
            value="7 / 10"
            description="Pumps currently operational"
            bgColor="bg-gradient-to-br from-[#9589A5] to-[#2AAFCD] text-white"
          />
          <SummaryCard
            icon={<FontAwesomeIcon icon={faGaugeHigh} />}
            title="CP-12398 Power Usage"
            value="21 Kwh"
            description="Power usage is up by 10%"
            bgColor="bg-gradient-to-br from-[#CECEE6] to-[#090C32] text-white"
          />
        </div>

        {/* Previous Reports */}
        <div className="flex flex-col gap-4 flex-1 w-2/3">
          <h2 className="text-lg font-semibold mb-4">
            View or Download Previous Reports
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {errorReports &&
              errorReports.map((report, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 border rounded-lg shadow-md"
                >
                  <img
                    src="https://via.placeholder.com/100" // Placeholder image
                    alt="Report Thumbnail"
                    className="w-16 h-16 rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-blue-800">
                      {report.id} Report
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {report.date}, {report.time}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <BotPump></BotPump>
    </div>
  );
};
export default GlobalAlerts;
