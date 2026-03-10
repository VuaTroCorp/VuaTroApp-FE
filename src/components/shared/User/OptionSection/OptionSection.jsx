import "./OptionSection.scss"
import {
    ChevronRight
} from "lucide-react";

function OptionSection() {
    const PRICE_OPTIONS = [
    "Dưới 1 triệu", "Từ 1 - 2 triệu", "Từ 2 - 3 triệu", "Từ 3 - 5 triệu",
    "Từ 5 - 7 triệu", "Từ 7 - 10 triệu", "Từ 10 - 15 triệu", "Trên 15 triệu"
    ];

    const AREA_OPTIONS = [
    { label: "Dưới 20m", unit: "2" },
    { label: "Từ 20 - 30m", unit: "2" },
    { label: "Từ 30 - 50m", unit: "2" },
    { label: "Từ 50 - 70m", unit: "2" },
    { label: "Từ 70 - 90m", unit: "2" },
    { label: "Trên 90m", unit: "2" }
    ];
    return (
        <div className="option-card">
            <div className="filter-section">
                <h3 className="filter-title">Xem theo khoảng giá</h3>
                <div className="filter-grid">
                {PRICE_OPTIONS.map((item, index) => (
                    <div className="filter-item" key={index}>
                    <ChevronRight size={14} className="filter-icon" />
                    <span className="filter-label">{item}</span>
                    </div>
                ))}
                </div>
            </div>

            <div className="filter-section">
                <h3 className="filter-title">Xem theo diện tích</h3>
                <div className="filter-grid">
                {AREA_OPTIONS.map((item, index) => (
                    <div className="filter-item" key={index}>
                    <ChevronRight size={14} className="filter-icon" />
                    <span className="filter-label">
                        {item.label}<sup>{item.unit}</sup>
                    </span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
export default OptionSection;