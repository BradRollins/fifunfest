import { createContext, useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ALUMNI_PASSCODE, EARLY_ACCESS_ENDS, STRIPE_TICKET_URL } from "@/lib/tickets";

type TicketPasscodeContextValue = {
  openTicketDialog: () => void;
};

const TicketPasscodeContext = createContext<TicketPasscodeContextValue | undefined>(
  undefined
);

export const TicketPasscodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const openTicketDialog = () => {
    if (new Date() >= EARLY_ACCESS_ENDS) {
      window.open(STRIPE_TICKET_URL, "_blank");
      return;
    }
    setCode("");
    setError(false);
    setIsOpen(true);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setCode("");
      setError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().toUpperCase() === ALUMNI_PASSCODE) {
      setIsOpen(false);
      setCode("");
      setError(false);
      window.open(STRIPE_TICKET_URL, "_blank");
    } else {
      setError(true);
    }
  };

  return (
    <TicketPasscodeContext.Provider value={{ openTicketDialog }}>
      {children}
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Alumni Early Access</DialogTitle>
            <DialogDescription>
              Enter your alumni passcode to purchase tickets early.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="alumni-passcode">Passcode</Label>
              <Input
                id="alumni-passcode"
                autoFocus
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Enter code"
              />
              {error && (
                <p className="text-sm text-destructive">
                  That code isn't valid. Please check and try again.
                </p>
              )}
            </div>
            <DialogFooter>
              <Button type="submit" variant="hero">
                Continue to Checkout
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </TicketPasscodeContext.Provider>
  );
};

export const useTicketPasscode = () => {
  const context = useContext(TicketPasscodeContext);
  if (!context) {
    throw new Error("useTicketPasscode must be used within a TicketPasscodeProvider");
  }
  return context;
};
