export interface FinanceData {
	expenses: Expenses;
	income: Income;
	profit: Profit;
}

export interface Expenses {
	benefits: number;
	hostingBandwidth: number;
	hostingExpenses: number;
	hostingPowerBill: number;
	hostingRent: number;
	investmentProjectExpenses: number;
	licenseExpenses: number;
	loans: number;
	marketingExpenses: number;
	officeRent: number;
	perDay: number;
	perHour: number;
	total: number;
	totalSalary: number;
}

export interface Income {
	outsourcingTasks: number;
	totalIncome: number;
}

export interface Profit {
	perDay: number;
	perHour: number;
	perMonth: number;
}
