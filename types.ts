import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";
import { Member, Profile, Server } from "@prisma/client";

// create custom type extending member and profile
export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

// socket.io
export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};
