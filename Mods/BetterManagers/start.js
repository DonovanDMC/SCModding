"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UpdateEmployees() {
    Helpers.GetAllEmployees(false).forEach((employee) => {
        var _a;
        if (![Enums.EmployeeTypeNames.Manager, Enums.EmployeeTypeNames.HrManager, Enums.EmployeeTypeNames.ChiefExecutiveOfficer].some(type => employee.employeeTypeName === type))
            return;
        if (!((_a = Object.getOwnPropertyDescriptor(employee, "speed")) === null || _a === void 0 ? void 0 : _a.get)) {
            if (employee.originalSpeed)
                employee.speed = employee.originalSpeed;
            if (employee.originalMaxSpeed)
                employee.maxSpeed = employee.originalMaxSpeed;
            employee.originalSpeed = employee.speed;
            employee.originalMaxSpeed = employee.maxSpeed;
            employee.maxSpeed *= Multiplier;
            let _speed = employee.speed * Multiplier;
            delete employee.speed;
            Object.defineProperty(employee, "speed", {
                get() { return _speed; },
                set(val) {
                    _speed = Math.max(_speed + ((val - _speed) * Multiplier), 0);
                }
            });
        }
    });
}
const Multiplier = 2;
module.exports = {
    initialize() {
        const originalHelper = Helpers.CalculateMaxInCharge.bind(Helpers);
        Helpers.CalculateMaxInCharge = function CalculateMaxInCharge(employee) {
            let result = originalHelper.call(this, employee);
            if ([Enums.EmployeeTypeNames.Manager, Enums.EmployeeTypeNames.HrManager, Enums.EmployeeTypeNames.ChiefExecutiveOfficer].some(type => employee.employeeTypeName === type))
                result *= Multiplier;
            return result;
        };
    },
    onNewHour: UpdateEmployees,
    onLoadGame: UpdateEmployees
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLFNBQVMsZUFBZTtJQUN2QixPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQTBGLEVBQUUsRUFBRTs7UUFDckksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ2xMLElBQUksQ0FBQyxDQUFBLE1BQUEsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsMENBQUUsR0FBRyxDQUFBLEVBQUU7WUFDN0QsSUFBSSxRQUFRLENBQUMsYUFBYTtnQkFBRSxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDcEUsSUFBSSxRQUFRLENBQUMsZ0JBQWdCO2dCQUFFLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQzdFLFFBQVEsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN4QyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUM5QyxRQUFRLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQztZQUNoQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUN6QyxPQUFRLFFBQWdDLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtnQkFDeEMsR0FBRyxLQUFLLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsR0FBRyxDQUFDLEdBQVc7b0JBQ2QsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7YUFDRCxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNyQixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2hCLFVBQVU7UUFDVCxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLG9CQUFvQixDQUFDLFFBQVE7WUFDcEUsSUFBSSxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDO2dCQUFFLE1BQU0sSUFBSSxVQUFVLENBQUM7WUFDL0wsT0FBTyxNQUFNLENBQUM7UUFDZixDQUFDLENBQUM7SUFDSCxDQUFDO0lBQ0QsU0FBUyxFQUFHLGVBQWU7SUFDM0IsVUFBVSxFQUFFLGVBQWU7Q0FDYixDQUFDIn0=