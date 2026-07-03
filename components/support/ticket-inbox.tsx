"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn, getInitials } from "@/lib/utils";
import { TicketPriorityBadge, TicketStatusBadge } from "@/components/support/ticket-badges";
import type { Ticket } from "@/lib/mock/support";

export function TicketInbox({ tickets }: { tickets: Ticket[] }) {
  const [selectedId, setSelectedId] = useState(tickets[0]?.id);
  const selected = tickets.find((t) => t.id === selectedId) ?? tickets[0];

  return (
    <Card className="overflow-hidden p-0">
      <div className="grid grid-cols-1 md:grid-cols-[20rem_1fr]">
        <div className="flex max-h-[36rem] flex-col divide-y overflow-y-auto border-b md:border-r md:border-b-0">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              onClick={() => setSelectedId(ticket.id)}
              className={cn(
                "flex flex-col gap-1.5 p-3 text-left transition-colors hover:bg-muted/50",
                ticket.id === selected?.id && "bg-muted"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-medium">{ticket.requester}</span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {ticket.updatedAt}
                </span>
              </div>
              <p className="truncate text-sm text-muted-foreground">{ticket.subject}</p>
              <div className="flex items-center gap-1.5">
                <TicketStatusBadge status={ticket.status} />
                <TicketPriorityBadge priority={ticket.priority} />
              </div>
            </button>
          ))}
        </div>

        <CardContent className="flex flex-col gap-4 p-4">
          {selected && (
            <>
              <div className="flex items-start justify-between gap-2 border-b pb-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium">{selected.subject}</h3>
                  <p className="text-sm text-muted-foreground">
                    {selected.requester} · {selected.channel}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <TicketStatusBadge status={selected.status} />
                  <TicketPriorityBadge priority={selected.priority} />
                </div>
              </div>

              <div className="flex max-h-80 flex-col gap-3 overflow-y-auto">
                {selected.messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex items-end gap-2",
                      message.from === "agent" && "flex-row-reverse"
                    )}
                  >
                    <Avatar size="sm">
                      <AvatarFallback>{getInitials(message.author)}</AvatarFallback>
                    </Avatar>
                    <div
                      className={cn(
                        "flex max-w-sm flex-col gap-0.5 rounded-lg px-3 py-2 text-sm",
                        message.from === "agent"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      <span>{message.message}</span>
                      <span
                        className={cn(
                          "text-[0.7rem] opacity-70",
                          message.from === "agent" ? "text-right" : "text-left"
                        )}
                      >
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-end gap-2 border-t pt-3">
                <Textarea placeholder="Type a reply..." className="min-h-10 flex-1" />
                <Button size="icon">
                  <Send />
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </div>
    </Card>
  );
}
