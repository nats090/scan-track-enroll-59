import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import collegeCampus from '@/assets/college-campus.png';
import collegeHeader from '@/assets/college-header.png';
import footerInfo from '@/assets/footer-info.png';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
          <img 
            src={collegeHeader} 
            alt="Notre Dame of Kidapawan College" 
            className="h-16 w-auto"
          />
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <div 
        className="relative min-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${collegeCampus})` }}
      >
        <div className="absolute inset-0 bg-primary/30"></div>
        <div className="relative z-10 flex items-center justify-center min-h-[600px] px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Library Attendance System
              </h1>
              <p className="text-2xl text-white/90 drop-shadow-md">
                Choose your access level to continue
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Check In */}
              <Link to="/check-in">
                <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm cursor-pointer">
                  <CardHeader className="text-center">
                    <LogIn size={48} className="mx-auto mb-2 text-green-600" />
                    <CardTitle className="text-2xl text-green-600">Check In</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg text-foreground">Enter the library</p>
                    <p className="text-sm text-muted-foreground mt-2">Scan your student ID to check in</p>
                  </CardContent>
                </Card>
              </Link>

              {/* Check Out */}
              <Link to="/check-out">
                <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm cursor-pointer">
                  <CardHeader className="text-center">
                    <LogOut size={48} className="mx-auto mb-2 text-red-600" />
                    <CardTitle className="text-2xl text-red-600">Check Out</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg text-foreground">Exit the library</p>
                    <p className="text-sm text-muted-foreground mt-2">Scan your student ID to check out</p>
                  </CardContent>
                </Card>
              </Link>

              {/* Admin */}
              <Link to="/admin">
                <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm cursor-pointer">
                  <CardHeader className="text-center">
                    <Settings size={48} className="mx-auto mb-2 text-blue-600" />
                    <CardTitle className="text-2xl text-blue-600">Admin</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg text-foreground">View dashboard</p>
                    <p className="text-sm text-muted-foreground mt-2">Simple overview of library activity</p>
                  </CardContent>
                </Card>
              </Link>

              {/* Library Staff */}
              <Link to="/staff">
                <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/95 backdrop-blur-sm cursor-pointer">
                  <CardHeader className="text-center">
                    <Users size={48} className="mx-auto mb-2 text-purple-600" />
                    <CardTitle className="text-2xl text-purple-600">Library Staff</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg text-foreground">Manage system</p>
                    <p className="text-sm text-muted-foreground mt-2">Add students, edit accounts, export reports</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Instructions Section */}
      <div className="bg-background py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-card rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-card-foreground">How to Use the Library System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-xl mb-4 text-primary">For Students:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Use "Check In" when entering the library
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Use "Check Out" when leaving the library
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Simply scan your student ID barcode
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Ask library staff if you need help
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-4 text-primary">For Staff:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Admin: View simple dashboard overview
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Staff: Manage student accounts and reports
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Export attendance data by day or month
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Add and edit student information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
          <img 
            src={footerInfo} 
            alt="Notre Dame of Kidapawan College Contact Information" 
            className="h-20 w-auto"
          />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;