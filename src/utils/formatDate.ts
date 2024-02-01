// ○○○○年○月○日
export const formatDate = (date: string) => {
  const formatDate = new Date(date);
  const year = formatDate.getFullYear();
  const month = formatDate.getMonth() + 1;
  const day = formatDate.getDate();

  return `${year}年${month + 1}月${day}日`;
};
