'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard } from 'lucide-react'

interface PaymentFormProps {
  amount: number
  onPaymentComplete: () => void
}

export function PaymentForm({ amount, onPaymentComplete }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paypalEmail: ''
  })
  const [errors, setErrors] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paypalEmail: ''
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      paypalEmail: ''
    }

    if (paymentMethod === 'credit-card') {
      if (!formData.cardNumber.match(/^\d{16}$/)) {
        newErrors.cardNumber = 'Please enter a valid 16-digit card number'
        isValid = false
      }

      if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
        newErrors.expiryDate = 'Please enter a valid expiry date (MM/YY)'
        isValid = false
      }

      if (!formData.cvv.match(/^\d{3,4}$/)) {
        newErrors.cvv = 'Please enter a valid CVV'
        isValid = false
      }
    } else {
      if (!formData.paypalEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.paypalEmail = 'Please enter a valid email address'
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Process payment
      onPaymentComplete()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <RadioGroup
              defaultValue="credit-card"
              onValueChange={setPaymentMethod}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <RadioGroupItem
                  value="credit-card"
                  id="credit-card"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="credit-card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCard className="mb-2" />
                  Credit Card
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCard className="mb-2" />
                  PayPal
                </Label>
              </div>
            </RadioGroup>
          </div>

          {paymentMethod === 'credit-card' ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
                {errors.cardNumber && (
                  <p className="text-sm text-red-500 mt-1">{errors.cardNumber}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                  />
                  {errors.expiryDate && (
                    <p className="text-sm text-red-500 mt-1">{errors.expiryDate}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                  {errors.cvv && (
                    <p className="text-sm text-red-500 mt-1">{errors.cvv}</p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Label htmlFor="paypalEmail">PayPal Email</Label>
              <Input
                id="paypalEmail"
                name="paypalEmail"
                type="email"
                placeholder="your@email.com"
                value={formData.paypalEmail}
                onChange={handleInputChange}
              />
              {errors.paypalEmail && (
                <p className="text-sm text-red-500 mt-1">{errors.paypalEmail}</p>
              )}
            </div>
          )}

          <div className="mt-6">
            <Button type="submit" className="w-full bg-[#EF4444] hover:bg-[#DC2626]">
              Pay ${amount.toFixed(2)}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}