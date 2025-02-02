# Contributing to Jarvis

Thank you for your interest in contributing to Jarvis! This document provides guidelines and information about contributing to the project.

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report:
- Check the issue tracker to avoid duplicates
- Gather information about your environment
- Try to reproduce the issue in the latest version

When submitting a bug report, include:
- A clear, descriptive title
- Detailed steps to reproduce the problem
- Expected behavior vs actual behavior
- System information (OS, Python version, etc.)
- Relevant log files or screenshots
- Any workarounds you've found

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:
- Use a clear and descriptive title
- Provide a detailed description of the proposed functionality
- Include examples of how the feature would be used
- Explain why this enhancement would be useful
- List any alternatives you've considered

### Pull Requests

1. Fork the repository and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Update documentation to reflect your changes
5. Follow our coding style and conventions

#### Development Process

1. Set up your development environment:
   ```bash
   # Clone your fork
   git clone https://github.com/YOUR_USERNAME/jarvis.git
   cd jarvis

   # Add upstream remote
   git remote add upstream https://github.com/mejam35/jarvis.git

   # Create feature branch
   git checkout -b feature/your-feature-name
   ```

2. Make your changes:
   - Write meaningful commit messages
   - Keep commits focused and atomic
   - Reference relevant issues

3. Keep your branch updated:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

4. Submit your pull request:
   - Fill out the pull request template completely
   - Link to any relevant issues
   - Provide context and reasoning for your changes

## Style Guidelines

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests after the first line

Example:
```
Add voice command support for smart home devices

- Implement basic light control commands
- Add temperature control functionality
- Create test suite for new commands

Fixes #123
```

### Python Code Style

- Follow PEP 8 guidelines
- Use meaningful variable and function names
- Add docstrings to all functions and classes
- Keep functions focused and under 50 lines when possible
- Include type hints for function parameters and return values

Example:
```python
def process_voice_command(command: str, context: Dict[str, Any]) -> CommandResult:
    """
    Process a voice command and execute the corresponding action.

    Args:
        command: The voice command string to process
        context: Dictionary containing command context and user preferences

    Returns:
        CommandResult object containing the execution status and response
    """
    # Implementation
```

### Documentation Style

- Use Markdown for documentation
- Include code examples where appropriate
- Keep language clear and concise
- Update both inline documentation and external docs
- Add comments explaining complex logic

## Testing

- Write unit tests for new functionality
- Ensure all tests pass before submitting PR
- Include integration tests for new features
- Run tests using:
  ```bash
  python -m pytest
  ```
