export const educationLevels = [
  {
    value: "ELEMENTARY_SCHOOL",
    label: "Primary School",
  },
  {
    value: "MIDDLE_SCHOOL",
    label: "Middle School",
  },
  {
    value: "HIGH_SCHOOL",
    label: "High School",
  },
  {
    value: "UNDER_GRADUATE",
    label: "Undergraduate",
  },
  {
    value: "GRADUATE",
    label: "Graduate",
  },
  {
    value: "POST_GRADUATE",
    label: "Postgraduate",
  },
  {
    value: "DOCTORATE",
    label: "Doctorate",
  },
  {
    value: "OTHER",
    label: "Other",
  },
];

export const roomTypes = [
  {
    value: "TEXT_CHAT",
    label: "Text Chat",
  },
  {
    value: "VIDEO_CHAT",
    label: "Video Chat",
  },

  {
    value: "VOICE_CHAT",
    label: "Voice Chat",
  },
  {
    value: "WHITEBOARD",
    label: "Whiteboard",
  },
];

export const edTypeColor = (value) => {
  return value === "OTHER"
    ? "bg-gray-400"
    : value === "ELEMENTARY_SCHOOL"
    ? "bg-yellow-400"
    : value === "MIDDLE_SCHOOL"
    ? "bg-orange-400"
    : value === "HIGH_SCHOOL"
    ? "bg-green-400"
    : value === "UNDER_GRADUATE"
    ? "bg-blue-400"
    : value === "POST_GRADUATE"
    ? "bg-purple-400"
    : value === "GRADUATE"
    ? "bg-pink-400"
    : value === "DOCTORATE"
    ? "bg-rose-400"
    : "bg-white";
};
export const edTypeBorderColor = (value) => {
  return value === "OTHER"
    ? "hover:border-gray-200"
    : value === "ELEMENTARY_SCHOOL"
    ? "hover:border-yellow-200"
    : value === "MIDDLE_SCHOOL"
    ? "hover:border-orange-200"
    : value === "HIGH_SCHOOL"
    ? "hover:border-green-200"
    : value === "UNDER_GRADUATE"
    ? "hover:border-blue-200"
    : value === "POST_GRADUATE"
    ? "hover:border-purple-200"
    : value === "GRADUATE"
    ? "hover:border-pink-200"
    : value === "DOCTORATE"
    ? "hover:border-rose-200"
    : "hover:border-white";
};
