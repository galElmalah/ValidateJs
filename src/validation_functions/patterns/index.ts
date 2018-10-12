import { urlPattern, emailPattern } from "../../helpers/regExPatterns";
import { composeValidators } from "../../helpers/composeValidators";
import { isHttps } from '../../helpers/partials/index';

/**
 * @param { string } url
 * @returns { boolean } if the string provided is a valid url
 */
export const isUrlValid = (url: string) => urlPattern.test(url);

export const isHttpsUrl = composeValidators(isUrlValid, isHttps);

export const isEmailValid = (email: string) => emailPattern.test(email);
