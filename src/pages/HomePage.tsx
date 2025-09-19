import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut, Settings, Users, Search, Facebook, Youtube, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import collegeCampus from '@/assets/college-campus.png';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold">ND</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">
              NOTRE DAME OF KIDAPAWAN COLLEGE
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 text-muted-foreground cursor-pointer" />
            <Facebook className="w-6 h-6 text-muted-foreground cursor-pointer" />
            <Youtube className="w-6 h-6 text-muted-foreground cursor-pointer" />
            <Phone className="w-6 h-6 text-muted-foreground cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              <a href="#" className="text-primary-foreground py-4 px-2 hover:bg-primary/80 transition-colors">Home</a>
              <a href="#" className="text-primary-foreground py-4 px-2 hover:bg-primary/80 transition-colors">Academics</a>
              <a href="#" className="text-primary-foreground py-4 px-2 hover:bg-primary/80 transition-colors">Admission</a>
              <a href="#" className="text-primary-foreground py-4 px-2 hover:bg-primary/80 transition-colors">Student Services</a>
              <a href="#" className="text-primary-foreground py-4 px-2 hover:bg-primary/80 transition-colors">Enrollment</a>
              <a href="#" className="text-primary-foreground py-4 px-2 hover:bg-primary/80 transition-colors">Research</a>
              <a href="#" className="text-primary-foreground py-4 px-2 hover:bg-primary/80 transition-colors">SDG Hub</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground py-4 px-2 hover:bg-primary/80 transition-colors text-sm">Gmail</a>
              <a href="#" className="text-primary-foreground py-4 px-2 hover:bg-primary/80 transition-colors text-sm">Faculty Portal</a>
              <a href="#" className="text-primary-foreground py-4 px-2 hover:bg-primary/80 transition-colors text-sm">Student Portal</a>
            </div>
          </div>
        </div>
      </nav>

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
                    <LogIn size={48} className="mx-auto mb-2 text-primary" />
                    <CardTitle className="text-2xl text-primary">Check In</CardTitle>
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
                    <LogOut size={48} className="mx-auto mb-2 text-destructive" />
                    <CardTitle className="text-2xl text-destructive">Check Out</CardTitle>
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
                    <Settings size={48} className="mx-auto mb-2 text-accent" />
                    <CardTitle className="text-2xl text-accent">Admin</CardTitle>
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
                    <Users size={48} className="mx-auto mb-2 text-primary" />
                    <CardTitle className="text-2xl text-primary">Library Staff</CardTitle>
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

      {/* Departments Banner */}
      <div className="bg-secondary py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-8 text-secondary-foreground font-semibold">
            <span className="py-2">Business & Accountancy</span>
            <span className="py-2">Engineering & Computer Education</span>
            <span className="py-2">Teacher Education, Liberal Arts & Nursing</span>
            <span className="py-2">Graduate School</span>
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-8 text-primary-foreground">
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">News & Updates</a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">Faculty Portal</a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">Student Portal</a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">E-Learning</a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">Web Opac</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;