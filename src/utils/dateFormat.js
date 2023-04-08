const dateFormat = (day) => {
  let currentDay;
  let currentLocation;

  switch (day) {
    case 0:
      currentDay = "Chủ nhật";
      currentLocation = "Thái Bình";
      break;
    case 1:
      currentDay = "Thứ hai";
      currentLocation = "Thủ Đô";
      break;
    case 2:
      currentDay = "Thứ ba";
      currentLocation = "Quảng Ninh";
      break;
    case 3:
      currentDay = "Thứ tư";
      currentLocation = "Bắc Ninh";
      break;
    case 4:
      currentDay = "Thứ năm";
      currentLocation = "Thủ Đô";
      break;
    case 5:
      currentDay = "Thứ sáu";
      currentLocation = "Hải Phòng";
      break;
    case 6:
      currentDay = "Thứ bảy";
      currentLocation = "Nam Định";
      break;
    default:
      break;
  }

  return {
    currentDay,
    currentLocation,
  };
};

export default dateFormat;
