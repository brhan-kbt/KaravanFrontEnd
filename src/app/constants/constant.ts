// import 'package:flutter/material.dart';

// import '../size_config.dart';

// // Shadows
// List<BoxShadow> shadowList = [
//   BoxShadow(
//     color: Colors.grey.withOpacity(0.2),
//     blurRadius: 15,
//     offset: const Offset(0, 7),
//   ),
//   BoxShadow(
//     color: Colors.grey.withOpacity(0.2),
//     spreadRadius: 1,
//     blurRadius: 5,
//     offset: const Offset(0, 0), // changes position of shadow
//   ),
// ];

// // Colors
// const MaterialColor primaryColor = MaterialColor(
//   0xff583623,
//   <int, Color>{
//     50: Color(0xFF0E7AC7),
//     100: Color(0xFF0E7AC7),
//     200: Color(0xFF0E7AC7),
//     300: Color(0xFF0E7AC7),
//     400: Color(0xFF0E7AC7),
//     500: Color(0xFF0E7AC7),
//     600: Color(0xFF0E7AC7),
//     700: Color(0xFF0E7AC7),
//     800: Color(0xFF0E7AC7),
//     900: Color(0xFF0E7AC7),
//   },
// );
// const MaterialColor secondaryColor = MaterialColor(
//   0xffFEF2DC,
//   <int, Color>{
//     50: Color(0xFF0E7AC7),
//     100: Color(0xFF0E7AC7),
//     200: Color(0xFF0E7AC7),
//     300: Color(0xFF0E7AC7),
//     400: Color(0xFF0E7AC7),
//     500: Color(0xFF0E7AC7),
//     600: Color(0xFF0E7AC7),
//     700: Color(0xFF0E7AC7),
//     800: Color(0xFF0E7AC7),
//     900: Color(0xFF0E7AC7),
//   },
// );
// const MaterialColor accentColor = MaterialColor(
//   0xffDE6230,
//   <int, Color>{
//     50: Color(0xFF0E7AC7),
//     100: Color(0xFF0E7AC7),
//     200: Color(0xFF0E7AC7),
//     300: Color(0xFF0E7AC7),
//     400: Color(0xFF0E7AC7),
//     500: Color(0xFF0E7AC7),
//     600: Color(0xFF0E7AC7),
//     700: Color(0xFF0E7AC7),
//     800: Color(0xFF0E7AC7),
//     900: Color(0xFF0E7AC7),
//   },
// );

// const Color greenMainColor = Color.fromRGBO(15, 71, 63, 1);
// const Color greenLightColor = Color.fromRGBO(55, 116, 108, 1);
// const Color greenDarkColor = Color.fromRGBO(3, 48, 40, 1);
// const Color mainBackGroundColor = Color.fromRGBO(231, 220, 202, 1);
// const Color greenLightColor2 = Color.fromRGBO(245, 222, 192, 1);

// // Static Data
// const ipAddressHome = '192.168.1.2';
// const ipAddressOffice = '192.168.0.115';
// const ipAddressRandom = '192.168.43.174';

// const taxCalculationPerc = 0.15;

// const kPrimaryColor = Color(0xFFFF7643);
// const kPrimaryLightColor = Color(0xFFFFECDF);
// const kPrimaryGradientColor = LinearGradient(
//   begin: Alignment.topLeft,
//   end: Alignment.bottomRight,
//   colors: [Color(0xFFFFA53E), Color(0xFFFF7643)],
// );
// const kSecondaryColor = Color(0xFF979797);
// const kTextColor = Color(0xFF757575);

// const kAnimationDuration = Duration(milliseconds: 200);

// final headingStyle = TextStyle(
//   fontSize: getProportionateScreenWidth(28),
//   fontWeight: FontWeight.bold,
//   color: Colors.black,
//   height: 1.5,
// );

// const defaultDuration = Duration(milliseconds: 250);

// // Form Error
// final RegExp emailValidatorRegExp =
//     RegExp(r"^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+");
// const String kEmailNullError = "Please Enter your email";
// const String kInvalidEmailError = "Please Enter Valid Email";
// const String kPassNullError = "Please Enter your password";
// const String kShortPassError = "Password is too short";
// const String kMatchPassError = "Passwords don't match";
// const String kNamelNullError = "Please Enter your name";
// const String kPhoneNumberNullError = "Please Enter your phone number";
// const String kAddressNullError = "Please Enter your address";

// //HTTP Status Code
// const int Created = 201;
// const int Unautorized = 401;
// const int ServerError = 500;

// //Order Type
// const String DinInOrder = "Dine-in Order";
// const String TakeOutOrder = "TakeOutOrder";
// const String DelveryOrder = "DelveryOrder";
// const String OnlineOrder = "Online Order";

// //Payment Mode
// const String Cash = "Cash";
// const String OnlinePaymentSystem = "Online";
// const String BankTransfer = "Bank Transfer";

// //Order Status
// const String Pending = "Pending";
// const String Confirmed = "Confirmed";
// const String InProgress = "In Progress";
// const String ReadyForPickUp = "Ready For PickUp";
// const String Completed = "Completed";
// const String Cancelled = "Cancelled";
// const String Refunded = "refunded";

// const Color pendingColor = Color.fromRGBO(211, 211, 211, 1); // Light gray
// const Color confirmedColor = Color.fromRGBO(0, 255, 0, 1); // Green
// const Color inProgressColor = Color.fromRGBO(255, 165, 0, 1); // Orange
// const Color readyForPickupColor = Color.fromRGBO(255, 255, 153, 1); // Yellow
// const Color completedColor = Color.fromRGBO(0, 100, 0, 1); // Dark green
// const Color cancelledColor = Color.fromRGBO(255, 204, 204, 1); // Light red
// const Color refundedColor = Color.fromRGBO(230, 230, 250, 1); // Light purple

// const Color pendingTextColor = Color(0xFF333333); // Dark gray
// const Color confirmedTextColor = Color(0xFF000000); // Black
// const Color inProgressTextColor = Color(0xFF000000); // Black
// const Color readyForPickupTextColor = Color(0xFF333333); // Dark gray
// const Color completedTextColor = Color(0xFFFFFFFF); // White
// const Color cancelledTextColor = Color(0xFF333333); // Dark gray
// const Color refundedTextColor = Color(0xFF333333); // Dark gray

// //Constant user type
// const String Administrator = "Administrator";
// const String Customer = "Customer";
// const String NotLoggedIn = "NotLoggedIn";

// final otpInputDecoration = InputDecoration(
//   contentPadding:
//       EdgeInsets.symmetric(vertical: getProportionateScreenWidth(15)),
//   border: outlineInputBorder(),
//   focusedBorder: outlineInputBorder(),
//   enabledBorder: outlineInputBorder(),
// );

// OutlineInputBorder outlineInputBorder() {
//   return OutlineInputBorder(
//     borderRadius: BorderRadius.circular(getProportionateScreenWidth(15)),
//     borderSide: BorderSide(color: kTextColor),
//   );
// }
