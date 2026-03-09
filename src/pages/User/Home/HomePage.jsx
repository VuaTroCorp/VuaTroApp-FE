import "./HomePage.scss";
import HomeFilterHeader from "components/shared/User/HomeFilterHeader/HomeFilterHeader";
import RoomCard from "components/shared/User/RoomCard/RoomCard";
import OptionSection from "components/shared/User/OptionSection/OptionSection";
import SelectionSection from "components/shared/User/SelectionSection/SelectionSection";
import ServiceSection from "components/shared/User/ServiceSection/ServiceSection";

function HomePage() {

  const mockRooms = [
    {
      id: 1,
      title: "PHÒNG TRỌ CAO CẤP GẦN ĐẠI HỌC NHA TRANG, VĨNH HẢI",
      price: 2500000,
      area: 25,
      location: "Vĩnh Hải, Nha Trang",
      rating: 5,
      description: "Phòng mới xây, đầy đủ nội thất, wifi tốc độ cao. Gần chợ Vĩnh Hải, an ninh tốt, giờ giấc tự do",
      images: [
        "https://img.freepik.com/.../main.jpg",
        "https://img.freepik.com/.../sub1.jpg",
        "https://img.freepik.com/.../sub2.jpg",
        "https://img.freepik.com/.../sub3.jpg"
      ],
      landlord: {
        name: "Đoàn Thàm Vĩnh Huân",
        avatar: "https://img.freepik.com/.../avatar.jpg",
        contact: "0974131489"
      },
      postDate: "Hôm nay"
    }
  ];

  return (
    <div className="home-page">
      <main className="main-content">
        <section className="left-content">
          <HomeFilterHeader count={mockRooms.length} />
          <div className="view-room-list">
            {mockRooms.map(room => (
              <RoomCard key={room.id} data={room} />
            ))}
          </div>
        </section>

        <aside className="right-content">
          <OptionSection />
          <SelectionSection /> 
        </aside>

        <footer className="bottom-wrapper">
          <ServiceSection />
        </footer>
      </main>
    </div>
  );
}
export default HomePage;
