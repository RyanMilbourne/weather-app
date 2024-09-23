const useTimezoneOffset = (timezoneOffsetInSeconds) => {
  const timezoneMap = {
    // UTC -12 to UTC +14 (Common Time Zones)
    "-43200": "Pacific/Kwajalein", // UTC-12
    "-39600": "Pacific/Chatham", // Chatham Islands Time (CHAST, UTC-10:45)
    "-36000": "Pacific/Honolulu", // Hawaii-Aleutian Standard Time (HAST, UTC-10)
    "-34200": "Pacific/Marquesas", // Marquesas Time (MART, UTC-9:30)
    "-32400": "America/Anchorage", // Alaska Standard Time (AKST, UTC-9)
    "-28800": "America/Los_Angeles", // Pacific Standard Time (PST, UTC-8)
    "-25200": "America/Denver", // Mountain Daylight Time (MDT, UTC-7)
    "-21600": "America/Chicago", // Central Daylight Time (CDT, UTC-6)
    "-18000": "America/New_York", // Eastern Daylight Time (EDT, UTC-5)
    "-14400": "America/Caracas", // Venezuela Time (VET, UTC-4)
    "-12600": "America/St_Johns", // Newfoundland Time (NT, UTC-3:30)
    "-10800": "America/Sao_Paulo", // Brasília Time (BRT, UTC-3)
    "-7200": "America/Noronha", // Fernando de Noronha Time (FNT, UTC-2)
    "-3600": "Atlantic/Azores", // Azores Time (AZOT, UTC-1)
    0: "UTC", // Coordinated Universal Time (UTC)
    3600: "Europe/London", // Western European Time (WET, UTC+1 with DST)
    7200: "Europe/Berlin", // Central European Time (CET, UTC+2 with DST)
    10800: "Europe/Moscow", // Moscow Standard Time (MSK, UTC+3)
    12600: "Asia/Tehran", // Iran Standard Time (IRST, UTC+3:30)
    14400: "Asia/Dubai", // Gulf Standard Time (GST, UTC+4)
    16200: "Asia/Kabul", // Afghanistan Time (AFT, UTC+4:30)
    18000: "Asia/Karachi", // Pakistan Standard Time (PKT, UTC+5)
    19800: "Asia/Kolkata", // India Standard Time (IST, UTC+5:30)
    20700: "Asia/Kathmandu", // Nepal Time (NPT, UTC+5:45)
    21600: "Asia/Dhaka", // Bangladesh Standard Time (BST, UTC+6)
    23400: "Asia/Yangon", // Myanmar Time (MMT, UTC+6:30)
    25200: "Asia/Jakarta", // Western Indonesia Time (WIB, UTC+7)
    28800: "Asia/Shanghai", // China Standard Time (CST, UTC+8)
    32400: "Asia/Tokyo", // Japan Standard Time (JST, UTC+9)
    34200: "Australia/Adelaide", // Central Australia Time (ACST, UTC+9:30)
    36000: "Australia/Sydney", // Australian Eastern Standard Time (AEST, UTC+10)
    39600: "Pacific/Noumea", // New Caledonia Time (NCT, UTC+11)
    43200: "Pacific/Auckland", // New Zealand Daylight Time (NZDT, UTC+12)
    46800: "Pacific/Tongatapu", // Tonga Time (TOT, UTC+13)
    50400: "Pacific/Kiritimati", // Line Islands Time (LINT, UTC+14)
  };

  // Return the IANA timezone, or fallback to UTC if the offset is not mapped
  return timezoneMap[String(timezoneOffsetInSeconds)] || "UTC";
};

export default useTimezoneOffset;
