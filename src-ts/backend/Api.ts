export default class Api {
  public static employeeList: any = null;

  public static getEmployeeData() {
    return new Promise((res, rej) => {
      if (Api.employeeList == null) {
        setTimeout(() => {
          let emps = [];
          for (let i=0;i<50;i++) {
            emps.push({
              name: `name of ${i}`,
              age: 30 + i
            });
          }
          Api.employeeList = emps;
          res(emps);
        }, 2000);
      } else {
        res(Api.employeeList)
      }
    })
  }
}
