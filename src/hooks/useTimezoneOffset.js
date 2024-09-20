const getTimeZoneFromOffset = (offsetInSeconds) => {
  const timezoneMap = {
    "-43200": "Pacific/Kwajalein", // Marshall Islands Time (MHT)
    "-39600": "Pacific/Chatham", // Chatham Islands Time (CHAST)
    "-36000": "Pacific/Honolulu", // Hawaii-Aleutian Standard Time (HAST)
    "-34800": "America/Anchorage", // Alaska Standard Time (AKST)
    "-32400": "America/Los_Angeles", // Pacific Standard Time (PST)
    "-28800": "America/Vancouver", // Pacific Standard Time (PST)
    "-25200": "America/Denver", // Mountain Daylight Time (MDT)
    "-21600": "America/Chicago", // Central Daylight Time (CDT)
    "-18000": "America/New_York", // Eastern Daylight Time (EDT)
    "-14400": "America/Caracas", // Venezuela Time (VET)
    "-12600": "America/Goose_Bay", // Atlantic Daylight Time (ADT)
    "-10800": "America/Halifax", // Atlantic Standard Time (AST)
    "-7200": "America/Sao_Paulo", // Brasília Time (BRT)
    "-3600": "Europe/London", // Greenwich Mean Time (GMT) or (BST)
    0: "UTC", // Coordinated Universal Time (UTC)
    3600: "Europe/Berlin", // Central European Time (CET)
    7200: "Europe/Moscow", // Moscow Standard Time (MSK)
    10800: "Asia/Dubai", // Gulf Standard Time (GST)
    12600: "Asia/Almaty", // Almaty Time (ALMT)
    14400: "Asia/Yerevan", // Armenia Time (AMT)
    18000: "Asia/Kolkata", // Indian Standard Time (IST)
    21600: "Asia/Bangkok", // Indochina Time (ICT)
    25200: "Asia/Shanghai", // China Standard Time (CST)
    28800: "Asia/Tokyo", // Japan Standard Time (JST)
    32400: "Australia/Sydney", // Australian Eastern Daylight Time (AEDT)
    36000: "Pacific/Auckland", // New Zealand Daylight Time (NZDT)
    43200: "Pacific/Fiji", // Fiji Time (FJT)
  };

  return timezoneMap[String(offsetInSeconds)] || "UTC";
};

export default getTimeZoneFromOffset;
