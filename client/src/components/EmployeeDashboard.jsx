import { CalendarIcon, DollarSignIcon, FileTextIcon, Subtitles } from 'lucide-react';
import React from 'react'

const EmployeeDashboard = ({data}) => {

    const emp = data.employee;

    const cards = [
        {
            icon: CalendarIcon,
            value: data.currentMonthAttendance,
            title: "Days Present",
            Subtitle: "This month",
        },

        {
            icon: FileTextIcon,
            value: data.pendingLeaves,
            title: "Pending Leaves",
            Subtitle: "Awaiting approval",
        },

        {
            icon: DollarSignIcon,
            value: data.latestPayslip ? `$${data.latestPayslip.netSalary?.toLocalString()}` : "N/A",
            title: "Latest Payslip",
            Subtitle: "Most recent payout",
        },


    ]

  return (
    <div className='animate-fade-in'>
            <div className='page-header'>
                <h1 className='page-title'>Welcome, {emp.firstName}!</h1>
                <p className='page-subtitle'>
                    {emp?.position} - {emp?.department || "No Department"}
                </p>
            </div>
    </div>
  )
}

export default EmployeeDashboard