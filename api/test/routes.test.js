  
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { expect } = chai;
let jwt = '';
chai.use(chaiHttp);

describe('App', () => {
  it('Should exists', () => {
    expect(app).to.be.a('function');})
})

describe('Auth Endpoints', () => {
  describe('POST /auth/register', () => {
    it('should create a new client', (done) => {
      chai.request(app)
        .post('/auth/register')
        .send({
          "firstName": "Harvey",
          "lastName": "Specter",
          "password": "oepxkfjr21!",
          "email": "h.specter@gmail.com",
          "phone": "0635465321"
        })
        .end((err,res) => {
          expect(res).to.have.status(200);
          expect(res.body.role).to.equal('CLIENT');
          done();
        })
    })
  })

  describe('POST /auth/login', () => {
    it('should login successfully', (done) => {
      chai.request(app)
        .post('/auth/login')
        .send({
          "email": "h.specter@gmail.com",
          "password": "oepxkfjr21!"
        })
        .end((err,res) => {
          expect(res).to.have.status(200);
          expect(res.body.msg).to.equal('User is logged');
          done();
        })
    })
  })
  
  // describe('POST /auth/logout', () => {
  //   it('should logout successfully', (done) => {
  //     chai.request(app)
  //       .post('/auth/logout')
  //       .send({
  //         "email": "h.specter@gmail.com",
  //         "password": "oepxkfjr21!"
  //       })
  //       .end((err,res) => {
  //         expect(res).to.have.status(200);
  //         expect(res.body.msg).to.equal('User is logged');
  //         done();
  //       })
  //   })
  // })
})

describe('Users Endpoints', () => {
  before(function(done){
    chai.request(app)
      .post('/auth/login')
      .send({
        "email": "h.specter@gmail.com",
        "password": "oepxkfjr21!"
      })
      .end(function(err, res){
        jwt = res.body.token;
        expect(res).to.have.status(200);
        expect(res.body.msg).to.equal('User is logged');
        done();
      });
  });
  describe('GET /users', () => {
    it('should return all the users', (done) => {
      chai.request(app)
        .get('/users')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          console.log(res.body);
          expect(res).to.have.status(200);
          expect(res.body.msg).to.equal('All Users');
          done();
        })
    })
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
        .get('/users')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          console.log(res.body);
          expect(res).to.have.status(403);
          done();
        })
    })
  })

  describe('GET /users/:idUser', () => {
    it('should return 403 Access denied when idUser is not the logged user', (done) => {
      chai.request(app)
        .get('/users/2')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          console.log(res.body);
          expect(res).to.have.status(403);
          done();
        })
    })
    it('should return 403 Access denied when idUser is not the logged user', (done) => {
      chai.request(app)
        .get('/users/2')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          console.log(res.body);
          expect(res).to.have.status(404);
          done();
        })
    })
    it('should return 403 Access denied when idUser is not the logged user', (done) => {
      chai.request(app)
        .get('/users/2')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          console.log(res.body);
          expect(res).to.have.status(200);
          done();
        })
    })
  })
})

// describe('Tickets Endpoints', () => {
//   describe('POST /auth/register', () => {
//     it('should create a new client', (done) => {
//       chai.request(app)
//         .post('/auth/register')
//         .send({
//           "firstName": "Harvey",
//           "lastName": "Specter",
//           "password": "oepxkfjr21!",
//           "email": "h.specter@gmail.com",
//           "phone": "0635465321"
//         })
//         .end((err,res) => {
//           expect(res).to.have.status(200);
//           expect(res.body.role).to.equal('CLIENT');
//           done();
//         })
//     })
//   })

//   describe('POST /auth/login', () => {
//     it('should login successfully', (done) => {
//       chai.request(app)
//         .post('/auth/login')
//         .send({
//           "email": "h.specter@gmail.com",
//           "password": "oepxkfjr21!"
//         })
//         .end((err,res) => {
//           expect(res).to.have.status(200);
//           expect(res.body.msg).to.equal('User is logged');
//           done();
//         })
//     })
//   })
// })
