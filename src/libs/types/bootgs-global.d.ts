import * as bootgs from 'bootgs';

declare global {
  const App: typeof bootgs.App;
  const createApp: typeof bootgs.createApp;
  const Controller: typeof bootgs.Controller;
  const HttpController: typeof bootgs.HttpController;
  const RestController: typeof bootgs.RestController;
  const Service: typeof bootgs.Service;
  const Repository: typeof bootgs.Repository;
  const Injectable: typeof bootgs.Injectable;
  const Inject: typeof bootgs.Inject;
  
  const Get: typeof bootgs.Get;
  const Post: typeof bootgs.Post;
  const Put: typeof bootgs.Put;
  const Patch: typeof bootgs.Patch;
  const Delete: typeof bootgs.Delete;
  
  const Param: typeof bootgs.Param;
  const Query: typeof bootgs.Query;
  const Body: typeof bootgs.Body;
  const Headers: typeof bootgs.Headers;
  const Request: typeof bootgs.Request;
  
  // E outros necessários. Ex: AuthRequired se for do BootGS ou customizado?
  // O AuthRequired não listado no README, deve ser customizado.
}
