/* eslint-disable no-param-reassign */
function twoDecimalsOnly(value) {
  try {
    const twoDecimals = Math.round(value * 100) / 100;
    if (Number.isNaN(twoDecimals)) return 0.00;
    return Number(twoDecimals).toFixed(2);
  } catch (error) {
    console.log(error);
    return 0.00;
  }
}

export default ({ app }) => {
  app.config.globalProperties.$twoDecimalsOnly = twoDecimalsOnly;
};
