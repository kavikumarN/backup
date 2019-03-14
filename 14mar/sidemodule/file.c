// Define the JavaScript method's signature that we're going to be calling.
extern void CallJS(int iVal);

// A method that the JavaScript will call into to trigger our code
// that will in turn call a JavaScript method passing along the value
// received.
void Test(int iVal){ CallJS(iVal); } 
