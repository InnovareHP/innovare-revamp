export const formatTime = (dateString: string | null) => {
  if (!dateString) return "Not recorded";
  return new Date(dateString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString([], {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
