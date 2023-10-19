import { Member, Profile, Server } from "@prisma/client";

// create custom type extending member and profile
export type ServerWithMembersWithProfiles = Server & {
  members: Member & { profile: Profile }[];
};
