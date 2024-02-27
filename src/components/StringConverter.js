import React, { useMemo, useState } from 'react';

const StringConverter = () => {
  const [input, setInput] = useState('');

  const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const FirstLetterCapital = (str) => {
    var newStr = str.split(' ').map((x) => x.charAt(0).toUpperCase() + x.slice(1));
    return newStr.join(' ');
  };

  const UpperCase_String = (str) => {
    let uppercase = str.split(' ').map((x) => x.toUpperCase());
    return uppercase.join(' ');
  };

  const LowerCase_String = (str) => {
    let lowercase = str.split(' ').map((x) => x.toLowerCase());
    return lowercase.join(' ');
  };

  const reverse_String = (str) => {
    let reverse = str.split('').reverse().join('');
    return reverse;
  };

  const isPalindrome = useMemo(() => {
    return input === input.split('').reverse().join('');
  }, [input]);

  const handleCopyClick = (text) => {
    copyToClipboard(text);
    alert('Copied to clipboard!');
  };

  return (
    <>

      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">

          <div className='d-flex align-items-center justify-content-between col-md-12'>

            <div className='d-flex align-items-center col-md-10'>
              <a className="navbar-brand" href="https://tarun-rudakiya-portfolioapp.netlify.app/">
                <img src="/img/T icon.png" alt="mylogo" width="30" height="24" class="d-inline-block align-text-top" />
              </a>
              <h5 className='text-white'>
                Tarun Rudakiya
              </h5>
            </div>


            <div className='d-flex col-md-6 '>

              <a className="navbar-brand" href="https://github.com/tarunrudakiya123">
                <img src="/img/icons8-github-50.png" alt="github" width="46" height="46" class="d-inline-block align-text-top" />
              </a>



              <a className="navbar-brand" href="https://www.linkedin.com/in/tarun-rudakiya-796a771a4/">
                <img src="/img/icons8-linkedin-50.png" alt="linkdin" width="46" height="46" class="d-inline-block align-text-top" />
              </a>


              <a className="navbar-brand" href="https://www.instagram.com/tarun_rudakiya_1201/">
                <img src="/img/icons8-instagram-50.png" alt="instagram" width="46" height="46" class="d-inline-block align-text-top" />
              </a>
            </div>

          </div>
        </div>
      </nav >


      <h1 className='mt-3' style={{ color: 'maroon', textAlign: 'center' }}>Please enter string to convert</h1>



      <div className='mt-4' style={{ display: 'flex', justifyContent: 'center' }}>
        <textarea
          cols={40}
          placeholder=' Enter String here...'
          style={{ border: '1px solid green', padding: '10px', borderRadius: '10px' }}
          type='text'
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className='row m-0 px-5 mt-4 g-flex gap-4  ' style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-body text-primary">
            <h5 className="card-title">First Letter Capital</h5>
            {input.length < 1 ? (
              <>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            ) : (
              <div>
                <p className="card-text">{FirstLetterCapital(input)}</p>

              </div>
            )}
          </div>
          <div class="card-header"> <img src='/img/copy-icon.png' height={25} onClick={() => handleCopyClick(FirstLetterCapital(input))}></img></div>

        </div>

        <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-body text-success">
            <h5 className="card-title">Length of String</h5>
            {input.length < 1 ? (
              <>
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            ) : (
              <div>
                <p className="card-text">{input.length}</p>
              </div>
            )}
          </div>
          <div class="card-header"> <img src='/img/copy-icon.png' height={25} onClick={() => handleCopyClick(input.length)}></img></div>

        </div>

        <div className="card border-secondary  mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-body text-secondary ">
            <h5 className="card-title">String In Uppercase</h5>
            {input.length < 1 ? (
              <>
                <div className="spinner-border text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            ) : (
              <div>
                <p className="card-text">{UpperCase_String(input)}</p>
              </div>
            )}
          </div>
          <div class="card-header"> <img src='/img/copy-icon.png' height={25} onClick={() => handleCopyClick(UpperCase_String(input))}></img></div>

        </div>

        <div className="card border-warning  mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-body text-warning ">
            <h5 className="card-title">String In Lowercase</h5>
            {input.length < 1 ? (
              <>
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            ) : (
              <div>
                <p className="card-text">{LowerCase_String(input)}</p>
              </div>
            )}
          </div>
          <div class="card-header"> <img src='/img/copy-icon.png' height={25} onClick={() => handleCopyClick(LowerCase_String(input))}></img></div>

        </div>

        <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-body text-info">
            <h5 className="card-title">Reverse String</h5>
            {input.length < 1 ? (
              <>
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            ) : (
              <div>
                <p className="card-text">{reverse_String(input)}</p>
              </div>
            )}
          </div>
          <div class="card-header"> <img src='/img/copy-icon.png' height={25} onClick={() => handleCopyClick(reverse_String(input))}></img></div>

        </div>

        <div className="card border-dark  mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-body text-dark ">
            <h5 className="card-title">Palindrome</h5>
            {input.length < 1 ? (
              <>
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            ) : (
              <div>
                <p className="card-text">{isPalindrome ? "Yes" : "No"}</p>
              </div>
            )}
          </div>
          <div class="card-header"> <img src='/img/copy-icon.png' height={25} onClick={() => handleCopyClick(isPalindrome)}></img></div>

        </div>
      </div>
    </>
  );
};

export default StringConverter;
