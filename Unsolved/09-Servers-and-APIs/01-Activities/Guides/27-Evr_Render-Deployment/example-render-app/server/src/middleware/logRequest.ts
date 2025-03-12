const logRequest = (req: any, _res: any, next: any) => {
  console.log(`${req.method} request received to ${req.url}`);
  next();
};

export default logRequest;
