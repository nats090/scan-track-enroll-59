import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, RefreshCw, Settings, Key } from 'lucide-react';
import { authenticator } from 'otplib';
import QRCode from 'qrcode';
import { useToast } from '@/components/ui/use-toast';

interface AuthGuardProps {
  onAuthenticated: () => void;
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ onAuthenticated, children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSetup, setIsSetup] = useState(false);
  const [code, setCode] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [secret, setSecret] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const [showSetup, setShowSetup] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if 2FA is already set up
    const savedSecret = localStorage.getItem('auth_guard_secret');
    const authStatus = sessionStorage.getItem('auth_guard_authenticated');
    
    if (savedSecret) {
      setSecret(savedSecret);
      setIsSetup(true);
    }
    
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    // Update countdown timer
    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const remaining = 30 - (now % 30);
      setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const generateSecret = async () => {
    const newSecret = authenticator.generateSecret();
    const appName = 'Library Management System';
    const accountName = 'Admin Access';
    
    const otpauth = authenticator.keyuri(accountName, appName, newSecret);
    const qrCode = await QRCode.toDataURL(otpauth);
    
    setSecret(newSecret);
    setQrCodeUrl(qrCode);
    setShowSetup(true);
  };

  const saveSecret = () => {
    if (!code) {
      toast({
        title: "Error",
        description: "Please enter the verification code",
        variant: "destructive"
      });
      return;
    }

    const isValid = authenticator.verify({ token: code, secret });
    if (isValid) {
      localStorage.setItem('auth_guard_secret', secret);
      setIsSetup(true);
      setShowSetup(false);
      setCode('');
      toast({
        title: "Success",
        description: "2FA authentication has been set up successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid verification code. Please try again.",
        variant: "destructive"
      });
    }
  };

  const verifyCode = () => {
    if (!code) {
      toast({
        title: "Error",
        description: "Please enter the verification code",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate slight delay for UX
    setTimeout(() => {
      const isValid = authenticator.verify({ token: code, secret });
      
      if (isValid) {
        setIsAuthenticated(true);
        sessionStorage.setItem('auth_guard_authenticated', 'true');
        onAuthenticated();
        toast({
          title: "Access Granted",
          description: "Authentication successful",
        });
      } else {
        toast({
          title: "Access Denied",
          description: "Invalid authentication code",
          variant: "destructive"
        });
      }
      
      setIsLoading(false);
      setCode('');
    }, 500);
  };

  const resetAuth = () => {
    localStorage.removeItem('auth_guard_secret');
    sessionStorage.removeItem('auth_guard_authenticated');
    setIsAuthenticated(false);
    setIsSetup(false);
    setSecret('');
    setQrCodeUrl('');
    setShowSetup(false);
    toast({
      title: "Reset Complete",
      description: "2FA authentication has been reset",
    });
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Security Guard</CardTitle>
          <CardDescription>
            {!isSetup ? "Set up two-factor authentication" : "Enter your authentication code"}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {!isSetup && !showSetup && (
            <div className="text-center space-y-4">
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  Secure your system with time-based authentication codes that work offline.
                </AlertDescription>
              </Alert>
              <Button onClick={generateSecret} className="w-full">
                <Key className="mr-2 h-4 w-4" />
                Set Up Authentication
              </Button>
            </div>
          )}

          {showSetup && (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Scan this QR code with your authenticator app
                </p>
                {qrCodeUrl && (
                  <img src={qrCodeUrl} alt="QR Code" className="mx-auto border rounded" />
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  Secret: <code className="bg-muted px-1 rounded">{secret}</code>
                </p>
              </div>
              
              <div>
                <Label htmlFor="setup-code">Verification Code</Label>
                <Input
                  id="setup-code"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                />
              </div>
              
              <div className="flex gap-2">
                <Button onClick={saveSecret} className="flex-1">
                  Verify & Save
                </Button>
                <Button variant="outline" onClick={() => setShowSetup(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {isSetup && !showSetup && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <span className="text-2xl font-mono font-bold text-primary">
                    {timeRemaining}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Enter the current code from your authenticator app
                </p>
              </div>
              
              <div>
                <Label htmlFor="auth-code">Authentication Code</Label>
                <Input
                  id="auth-code"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  onKeyDown={(e) => e.key === 'Enter' && verifyCode()}
                />
              </div>
              
              <Button 
                onClick={verifyCode} 
                disabled={isLoading || code.length !== 6}
                className="w-full"
              >
                {isLoading ? (
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Shield className="mr-2 h-4 w-4" />
                )}
                {isLoading ? 'Verifying...' : 'Authenticate'}
              </Button>
              
              <Button variant="outline" onClick={() => setShowSetup(true)} className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                Reset Authentication
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthGuard;