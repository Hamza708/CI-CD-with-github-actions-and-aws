# EC2 GitHub Action with Docker Compose and Load Balancer / Auto Scaling Groups

Welcome to the EC2 GitHub Action with Docker Compose and Load Balancer / Auto Scaling Groups project! This repository is designed to help you deploy your application on EC2 instances using Docker Compose, along with Load Balancer and Auto Scaling Groups for scalability and high availability. We've included GitHub Actions workflows to automate the deployment process, making it easier for you to manage your infrastructure.

## Prerequisites

Before you begin, please ensure you have the following prerequisites:

- GitHub Actions: [Documentation](https://docs.github.com/en/actions)
- EC2 Instance(s): Set up your EC2 instance(s) where you'll deploy your application.
- Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)
- AWS Load Balancer / Auto Scaling Groups: Configure Load Balancer and Auto Scaling Groups for your EC2 instances.

## GitHub Action Workflow

This GitHub Actions workflow triggers on push to the `development` branch and performs the following steps:

1. **Checkout Repository:**
   Checks out the repository and switches to the `development` branch.

2. **Check if Docker and Docker Compose are installed:**
   Verifies if Docker and Docker Compose are installed on the runner. If not installed, it installs them.

3. **Build and start containers:**
   Builds and starts the Docker containers defined in the Docker Compose file. It removes any orphaned containers and brings up the services.

## Usage

To use this GitHub Action to deploy your application:

1. **Set up EC2 instances:**
  Ensure you have EC2 instances configured. Don't worry about Docker and Docker Compose, as they are handled by the GitHub Action defined in the workflow.

2. **Configure Load Balancer and Auto Scaling Groups:**
   Set up Load Balancer and Auto Scaling Groups to distribute traffic and scale your EC2 instances based on demand.

3. **Update Docker Compose file:**
   Update the `docker-compose.yml` file in your repository with your service configurations.

4. **Update GitHub Actions Workflow:**
   Customize the GitHub Actions workflow (`.github/workflows/deploy.yml`) if needed, adjusting any paths or commands as necessary.

5. **Push Changes:**
   Push changes to your GitHub repository.

6. **Monitor Execution:**
   Monitor the workflow execution in the Actions tab of your GitHub repository.

7. **Access Your Application:**
   Once the workflow completes successfully, access your application through the Load Balancer URL.

## Resources

Explore the following resources for more information:

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [AWS Load Balancer Documentation](https://aws.amazon.com/elasticloadbalancing/)
- [AWS Auto Scaling Documentation](https://aws.amazon.com/autoscaling/)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
