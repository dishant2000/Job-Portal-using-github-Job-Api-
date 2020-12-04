import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import { Container, Row,Col } from "react-bootstrap";
import JobsPagination from "./jobsPagination";
import JobSearcForm from "./JobSearcForm";
import MyCssLoader from "./myCssLoader";
function GithubJob() {
        const [params, setParams] = useState({});
        const [page, setPage] = useState(1);
        const { loading, error, jobs , hasNext} = useFetchJobs(params, page);
        const handleParamChange = (e)=>{
            let name = e.target.name;
            let value = e.target.value;
            setPage(1);
            setParams((prevParams) => {
                return {...prevParams, [name] : value}
            })
        }
    return (
          <div style = {{marginTop : "100px"}} className = "bg-light">
            <Container>
              <h1 className = "mb-4">Github Jobs</h1>
                <JobSearcForm params = {params} handleParamChange = {handleParamChange}/>
              <Row>
                {loading && <MyCssLoader/>}
                {error && <p>error occured ..404 </p>}
              </Row>
              <Row>
                  <div style = {{marginLeft : "20px"}}>
                      <JobsPagination page = {page} setPage = {setPage} hasNext = {hasNext}/>
                  </div>
              </Row>
              <Row>
                {jobs.length &&
                  jobs.map((job) => {
                    return <Col xs = {12} md = {12} lg = {12} xl = {6} key={job.id}><Job  job={job} /></Col>;
                  })
                }
              </Row>
            </Container>
          </div>

    )
}

export default GithubJob
