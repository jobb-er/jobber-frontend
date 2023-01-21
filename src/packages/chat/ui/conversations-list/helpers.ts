import { Conversations } from "packages/chat/models";

export const filterConversations = (
  conversations: Conversations,
  searchValue?: string,
) => {
  return conversations.filter((item) => {
    if (!searchValue) return true;
    const lcSearchValue = searchValue
      .toLowerCase()
      .trim()
      .split(" ")
      .filter((val) => val);
    return lcSearchValue.some((val) => {
      return (
        item.user.email.toLowerCase().includes(val) ||
        item.user.firstName.toLowerCase().includes(val) ||
        item.user.lastName.toLowerCase().includes(val)
      );
    });
  });
};
