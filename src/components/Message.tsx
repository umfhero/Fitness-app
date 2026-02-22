import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, User, MapPin } from 'lucide-react';

interface Session {
    id: string;
    trainerId: string;
    trainerName: string;
    date: Date;
    startTime: string;
    endTime: string;
    type: 'personal' | 'group' | 'class';
    capacity: number;
    enrolled: number;
    location: string;
    description: string;
}

interface Booking {
    id: string;
    sessionId: string;
    userId: string;
    bookedAt: Date;
    status: 'confirmed' | 'cancelled';
}

export default function FitnessApp() {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1));
    const [sessions, setSessions] = useState<Session[]>([
        {
            id: '1',
            trainerId: 'trainer1',
            trainerName: 'John Smith',
            date: new Date(2024, 0, 5),
            startTime: '09:00',
            endTime: '10:00',
            type: 'personal',
            capacity: 1,
            enrolled: 0,
            location: 'Studio A',
            description: 'One-on-one personal training'
        }
    ]);
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [selectedSession, setSelectedSession] = useState<Session | null>(null);

    const daysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const getSessionsForDate = (date: Date) => {
        return sessions.filter(
            s => s.date.toDateString() === date.toDateString()
        );
    };

    const handleBookSession = (session: Session) => {
        const booking: Booking = {
            id: Math.random().toString(),
            sessionId: session.id,
            userId: 'current-user',
            bookedAt: new Date(),
            status: 'confirmed'
        };
        setBookings([...bookings, booking]);
        setSessions(sessions.map(s =>
            s.id === session.id ? { ...s, enrolled: s.enrolled + 1 } : s
        ));
        setSelectedSession(null);
    };

    const renderCalendar = () => {
        const days = [];
        const totalDays = daysInMonth(currentDate);
        const firstDay = firstDayOfMonth(currentDate);

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="bg-gray-50"></div>);
        }

        for (let day = 1; day <= totalDays; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const daySessions = getSessionsForDate(date);
            const isToday = date.toDateString() === new Date().toDateString();

            days.push(
                <button
                    key={day}
                    onClick={() => setSelectedSession(daySessions[0] || null)}
                    className={`p-2 border rounded text-sm ${
                        isToday ? 'bg-blue-100 border-blue-500' : 'bg-white'
                    } ${daySessions.length > 0 ? 'border-green-500 font-bold' : ''}`}
                >
                    <div>{day}</div>
                    {daySessions.length > 0 && <div className="text-xs text-green-600">{daySessions.length}</div>}
                </button>
            );
        }

        return days;
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Booking Calendar</h2>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                                className="p-2 hover:bg-gray-200 rounded"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <span className="px-4 py-2">{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            <button
                                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                                className="p-2 hover:bg-gray-200 rounded"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-2 mb-4">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="text-center font-bold text-gray-700">{day}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
                </div>

                {/* Session Details & Booking */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Session Details</h3>
                    {selectedSession ? (
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-lg">{selectedSession.trainerName}</h4>
                                <p className="text-gray-600 capitalize">{selectedSession.type} Session</p>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Clock size={18} />
                                <span>{selectedSession.startTime} - {selectedSession.endTime}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <MapPin size={18} />
                                <span>{selectedSession.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <User size={18} />
                                <span>{selectedSession.enrolled}/{selectedSession.capacity} Enrolled</span>
                            </div>
                            <p className="text-sm text-gray-600">{selectedSession.description}</p>
                            <button
                                onClick={() => handleBookSession(selectedSession)}
                                disabled={selectedSession.enrolled >= selectedSession.capacity}
                                className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 disabled:bg-gray-400"
                            >
                                Book Session
                            </button>
                        </div>
                    ) : (
                        <p className="text-gray-500">Select a date with sessions to view details</p>
                    )}
                </div>
            </div>

            {/* Bookings List */}
            <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">My Bookings</h3>
                <div className="space-y-2">
                    {bookings.length === 0 ? (
                        <p className="text-gray-500">No bookings yet</p>
                    ) : (
                        bookings.map(booking => {
                            const session = sessions.find(s => s.id === booking.sessionId);
                            return (
                                <div key={booking.id} className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                                    <p className="font-bold">{session?.trainerName} - {session?.type}</p>
                                    <p className="text-sm text-gray-600">{session?.date.toDateString()} at {session?.startTime}</p>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}