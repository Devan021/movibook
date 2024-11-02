"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PaymentFormProps {
  amount: number; // Expecting a number for the amount
  onPaymentComplete: () => void;
}

export function PaymentForm({ amount = 0, onPaymentComplete }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate the amount before processing
    if (typeof amount !== 'number' || isNaN(amount) || amount < 0) {
      console.error('Invalid payment amount');
      return; // Early return if amount is invalid
    }
    // Here you would typically process the payment
    // For now, we'll just call onPaymentComplete
    onPaymentComplete();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <RadioGroup defaultValue="credit-card" onValueChange={setPaymentMethod} className="mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit-card" id="credit-card" />
              <Label htmlFor="credit-card">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
          </RadioGroup>
          {paymentMethod === 'credit-card' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="flex gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="expiry-date">Expiry Date</Label>
                  <Input id="expiry-date" placeholder="MM/YY" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </div>
          )}
          {paymentMethod === 'paypal' && (
            <div className="space-y-2">
              <Label htmlFor="paypal-email">PayPal Email</Label>
              <Input id="paypal-email" type="email" placeholder="your@email.com" />
            </div>
          )}
          <Button type="submit" className="w-full mt-4">
            Pay ${amount.toFixed(2)}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
