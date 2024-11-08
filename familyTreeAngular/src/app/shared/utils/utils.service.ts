import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import _ from "lodash";


interface DateTimeOptions {
  includeMinutes?: boolean | null;
  includeSeconds?: boolean | null;
  use24HourFormat?: boolean | null;
  includeAmPm?: boolean | null;
}

@Component({
  template: ''
})

/**
 * @class UtilsServiceComponent
 * @description A common class for shared functionalities that can be used across the application.
 * This class provides utility methods to assist with various operations related to commercial suite projects.
 */
export class UtilsServiceComponent {

  /**
 * Retrieves the current date and time formatted as a string based on the specified options.
 *
 * @param {DateTimeOptions} [options={}] - An optional object that specifies the formatting options.
 * @param {boolean} [options.use24HourFormat=true] - Whether to use 24-hour format. Defaults to true.
 * @param {boolean} [options.includeMinutes=false] - Whether to include minutes in the output. Defaults to false.
 * @param {boolean} [options.includeSeconds=false] - Whether to include seconds in the output. Defaults to false.
 * @param {boolean} [options.includeAmPm=false] - Whether to include AM/PM in the output. Defaults to false.
 *
 * @returns {string} A formatted string representing the current date and time.
 */
  getFormattedDateTime(options: DateTimeOptions = {}): string {
    const now = new Date();

    // Extract date components
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();

    // Extract time components
    let hours = now.getHours();
    let period = '';

    const use24HourFormat = options.use24HourFormat !== null && options.use24HourFormat !== undefined ? options.use24HourFormat : true;
    const includeMinutes = options.includeMinutes !== null && options.includeMinutes !== undefined ? options.includeMinutes : false;
    const includeSeconds = options.includeSeconds !== null && options.includeSeconds !== undefined ? options.includeSeconds : false;
    const includeAmPm = options.includeAmPm !== null && options.includeAmPm !== undefined ? options.includeAmPm : false;

    if (!use24HourFormat) {
      period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert to 12-hour format
    }

    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = includeMinutes ? '-' + String(now.getMinutes()).padStart(2, '0') : '';
    const secondsStr = includeSeconds ? '-' + String(now.getSeconds()).padStart(2, '0') : '';
    const amPmStr = includeAmPm && !use24HourFormat ? ' ' + period : '';

    // Format date and time
    const formattedDate = `${day}-${month}-${year}`;
    const formattedTime = `${hoursStr}${minutesStr}${secondsStr}${amPmStr}`;

    // Return the combined date and time string
    return `${formattedDate} ${formattedTime}`.trim();
  }

  /**
   * Recursively marks all controls in the given FormGroup as touched.
   *
   * This function iterates through each control in the FormGroup and marks
   * it as touched, including nested FormGroups. This is useful for displaying
   * validation messages for all fields in a form.
   *
   * @param {FormGroup} formGroup - The FormGroup containing the controls to validate.
   */
  validateAllFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
      else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }

  /**
   * Validates the properties of an object against a list of forbidden values.
   *
   * This function checks each property of the provided object to ensure that:
   * - The property is not in the forbidden values list.
   * - The property is not null or undefined.
   * - If the property is a string, it is not an empty string after trimming.
   *
   * @param {Object} obj - The object to validate.
   * @param {string[]} forbiddenValues - An array of property names that should be excluded from validation.
   * @returns {boolean} - Returns true if all valid properties have non-empty values; otherwise, false.
   */
  ValidateObject(obj: Object, forbiddenValues: string[]): boolean {
    let isValid = true;
    Object.entries(obj).forEach(([key, value]) => {
      if (!forbiddenValues.includes(key) &&
        (value == null ||
          (typeof value === 'string' && value.trim().length === 0))) {
        isValid = false;
      }
    });

    return isValid;
  }


  /**
   * Compare two arrays.
   *
   * @function Promise Function
   * @param {Array} arr1 - The first array for comparison.
   * @param {Array} arr2 - The second array for comparison.
   *
   * @returns {Promise<boolean>} Returns a resolved boolean value; True if both are same, false otherwise.
   */
  compareArrayObjects = (arr1: any[], arr2: any[]): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
      if (arr1?.length !== arr2?.length) {
        resolve(false);
        return;
      }

      const isDateEqual = (date1: any, date2: any): boolean => {
        // Check if both are instances of Luxon DateTime or native Date
        if ((date1 && date1.isLuxonDateTime) || (date2 && date2.isLuxonDateTime)) {
          // Assuming `toISODate` is a Luxon DateTime method to get the date part
          return date1.toISODate() === date2.toISODate();
        } else if (date1 instanceof Date && date2 instanceof Date) {
          // Compare only the date part for native Date objects
          return date1.toISOString().slice(0, 10) === date2.toISOString().slice(0, 10);
        }

        return false; // Handle cases where one or both are not valid date objects
      };

      const deepCompare = async (obj1: any, obj2: any): Promise<boolean> => {
        if ((obj1 && typeof obj1 !== 'object') || (obj2 && typeof obj2 !== 'object')) {
          // Check if both are dates and compare only the date part
          if ((obj1 instanceof Date || (obj1 && obj1.isLuxonDateTime)) &&
            (obj2 instanceof Date || (obj2 && obj2.isLuxonDateTime))) {
            return isDateEqual(obj1, obj2);
          }
          return obj1 === obj2;
        }

        if (!obj1 || !obj2) {
          return obj1 === obj2; // Handle case where one is null or undefined
        }

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
          return false;
        }

        for (const key of keys1) {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
            const arraysEqual = await this.compareArrayObjects(obj1[key], obj2[key]);
            if (!arraysEqual) {
              return false;
            }
          } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            const objectsEqual = await deepCompare(obj1[key], obj2[key]);
            if (!objectsEqual) {
              return false;
            }
          } else {
            // Check for date fields and compare only date part
            if ((obj1[key] instanceof Date || (obj1[key] && obj1[key].isLuxonDateTime)) &&
              (obj2[key] instanceof Date || (obj2[key] && obj2[key].isLuxonDateTime))) {
              if (!isDateEqual(obj1[key], obj2[key])) {
                return false;
              }
            } else if (obj1[key] !== obj2[key]) {
              return false;
            }
          }
        }

        return true;
      };

      if (arr1 && arr1?.length > 0) {
        for (let i = 0; i < arr1.length; i++) {
          const obj1 = arr1[i];
          const obj2 = arr2[i];

          const objectsEqual = await deepCompare(obj1, obj2);
          if (!objectsEqual) {
            resolve(false);
            return;
          }
        }
      }

      resolve(true);
    });
  };

  /**
   * Compares two objects for equality, with an option to exclude specific keys.
   *
   * @param {Object} obj1 - The first object to compare.
   * @param {Object} obj2 - The second object to compare.
   * @param {string[] | undefined} [excludedKeys] - An optional array of keys to exclude from the comparison.
   * If not provided, all keys will be compared.
   * @returns {Promise<boolean>} A promise that resolves to true if the objects are equal (excluding specified keys),
   *                              or false if they are not equal.
   */
  // CompareForms<T>(obj1: Record<string, T>, obj2: Record<string, T>, excludedKeys?: string[]): Promise<boolean> {
  CompareForms(obj1: object, obj2: object, excludedKeys?: string[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        // If excludedKeys is not provided, set it to an empty array
        const excludedKeysArray = excludedKeys || [];

        // Check if both objects have the same number of keys (excluding the excludedKeys)
        const filteredKeys1 = keys1.filter(key => !excludedKeysArray.includes(key));
        const filteredKeys2 = keys2.filter(key => !excludedKeysArray.includes(key));

        //length check will be useful only if two objects have same number of items.
        // if (filteredKeys1.length !== filteredKeys2.length) {
        //     resolve(false);
        //     return;
        // }

        const commonKeys = _.intersection(filteredKeys1, filteredKeys2);

        for (const key of commonKeys) {
          // Skip the comparison for keys in excludedKeys
          if (excludedKeysArray.includes(key)) {
            continue;
          }

          let value1 = obj1[key];
          let value2 = obj2[key];

          // Skip if any value is undefined
          if (value1 === undefined && value2 === undefined) {
            continue;
          }

          if (value1 === undefined || value2 === undefined) {
            resolve(false);
            return;
          }

          // Handle numbers by rounding to 2 decimal places
          // if (typeof value1 === 'number' && typeof value2 === 'number') {
          //     value1 = Math.round(value1 * 100) / 100;
          //     value2 = Math.round(value2 * 100) / 100;
          // }

          // Handle dates by converting to strings
          // if (value1 instanceof Date && value2 instanceof Date) {
          //     value1 = value1.toISOString();
          //     value2 = value2.toISOString();
          // }

          // Compare values
          if (!_.isEqual(value1, value2)) {
            resolve(false);
            return;
          }
        }

        resolve(true);
      } catch (error: any) {
        reject(new Error('An error occurred while comparing objects: ' + error.message));
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
