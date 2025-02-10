import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const WaitListForm = () => {
  return (
    <div className="w-full">
      <div className="flex max-w-80 space-x-2">
        <Input
          type="email"
          placeholder="Join waitlist"
          className="bg-black/20 border-zinc-800 text-white placeholder:text-zinc-400"
        />
        <Button size="icon" className="bg-teal-600 hover:bg-teal-700">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default WaitListForm;
