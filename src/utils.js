export const toBase64 = (file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        resolve(reader.result);
    };
});

export const toUpperCaseFirst = (str) => str[0].toUpperCase() + str.slice(1);

export const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const calculateSalePrice = (price, sale) => Math.round(price - price * (sale / 100));

export const calculateTotalRating = (rating) => Math.floor(rating.reduce((prev, current) => +current + +prev) / rating.length);

export const setReverseValue = (value, setter) => setter(!value);