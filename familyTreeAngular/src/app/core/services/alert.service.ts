import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  /**
 * Displays a success message with a title and message.
 * @param {string} title - The title of the success message.
 * @param {string} message - The message content.
 */
  success(tittle: string, message?: string) {
    Swal.fire({
      title: tittle,
      text: message || '',
      icon: 'success'
    });
  }

  /**
   * Displays an informational message with a title and message.
   * @param {string} title - The title of the info message.
   * @param {string} message - The message content.
   */
  info(tittle: string, message?: string) {
    Swal.fire({
      title: tittle,
      text: message || '',
      icon: 'info'
    });
  }

  /**
 * Displays a warning message with a title and message.
 * @param {string} title - The title of the warning message.
 * @param {string} message - The message content.
 */
  warn(tittle: string, message?: string, onCloseCallback?: () => void) {
    Swal.fire({
      title: tittle,
      text: message || '',
      icon: 'warning',
      didClose: () => {
        if (onCloseCallback) {
          onCloseCallback();
        }
      }
    });
  }

  /**
 * Displays an error message with a title and message.
 * @param {string} title - The title of the error message.
 * @param {string} message - The message content.
 */
  error(tittle: string, message?: string) {
    Swal.fire({
      title: tittle,
      text: message || '',
      icon: 'error'
    });
  }

  /**
 * Displays a confirmation dialog with a title and message, returning the user's choice.
 * @param {string} title - The title of the confirmation dialog.
 * @param {string} message - The message content.
 * @returns {Promise<SweetAlertResult>} Promise resolving to user's confirmation choice.
 */
  confirm(tittle: string, message?: string) {
    return Swal.fire({
      title: tittle,
      text: message || '',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });
  }

}
