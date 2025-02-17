'use strict';

class DatePicker {
    /**
     * @param {string} divId - The id of an existing <div> where the calender should be rendered
     * @param {function} onDateSelected - A callback function that will be invoked with
     *                                      id, {year, month, day}
     */

    constructor(divId, onDateSelected) {
        this.container = document.getElementById(divId);
        this.onDateSelected = onDateSelected;

        // Keeping track of the currently displayed date
        this.currentDate = null;
    }

    render(dateObj) {
        this.container.innerHTML = "";

        const year = dateObj.getFullYear();
        const month = dateObj.getMonth();
        
        let dayToHighLight = dateObj.getDate();

        this.currentDate = new Date(year, month, dayToHighLight);

        // Create a container for the calender
        const calenderWrapper = document.createElement("div");
        calenderWrapper.className = "datepicker-wrapper";

        // Create a header of the Calender
        const header = document.createElement("div");
        header.className = "datepicker-header";
        
        // header consists of a prevBtn, title, and a nextBtn sequentially

        // Create button for navigating to prev month
        const prevBtn = document.createElement("button");
        prevBtn.type = "button";
        prevBtn.innerHTML = "&lt;";
        prevBtn.className = "datepicker-nav datepicker-prev";
        prevBtn.addEventListener("click", () => this.goToPreviousMonth());
        header.appendChild(prevBtn);

        // Create Title
        const title = document.createElement("span");
        title.className = "datepicker-title";
        title.textContent = this.getMonthName(month) + " " + year;
        header.appendChild(title)

        // Create button for navigating to next month
        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.innerHTML = "&gt;";
        nextBtn.className = "datepicker-nav datepicker-next";
        nextBtn.addEventListener("click", () => this.goToNextMonth());
        header.appendChild(nextBtn);

        calenderWrapper.appendChild(header);

        // Create Table for days
        const calenderTable = document.createElement("table");
        calenderTable.className = "datepicker-table";


        // Create a row for day names
        const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        const thead = document.createElement("thead");
        const dayRow = document.createElement("tr");
        dayNames.forEach(d => {
            const th = document.createElement("th");
            th.textContent = d;
            dayRow.appendChild(th);
        });
        thead.appendChild(dayRow);
        calenderTable.appendChild(thead);

        // Create the day grid
        const tbody = document.createElement("tbody");

        const firstOfMonth = new Date(year, month, 1);
        const firstDayOfWeek = firstOfMonth.getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        
        // Display up to 6 rows of 7 days each

        let rowsNeeded = 6;
        

    }

    goToPreviousMonth() {

    }

    goToNextMonth() {

    }

    getMonthName(monthIndex) {
        const months = [
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
        ];

        return months[monthIndex];
    }
}